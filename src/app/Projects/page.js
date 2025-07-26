'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "@/app/Projects/project.module.css";
import Navbar from "../components/Navbar";
import RemoveBtn from "../components/Removebtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '@/redux/authSlice';

function ProjectCard({ id, title, description }) {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        {isLogin && (
          <>
            <RemoveBtn id={id} />
            <Link href={`/editProject/${id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

function Page() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get("/api/projects/get-projects");
      if (data?.projects?.length > 0) {
        setProjects(data.projects);
      } else {
        toast.error("No projects found");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Something went wrong while fetching projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading projects...</div>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.headingBox}>
        <div className={styles.heading}>PROJECTS</div>
      </div>
      <div className={styles.root}>
        <div className={styles.container}>
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project._id}
                id={project._id} // Pass the ID to the ProjectCard
                title={project.title}
                description={project.description}
              />
            ))
          ) : (
            <p>No projects found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
