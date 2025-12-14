import { useParams } from 'react-router-dom'
import { getProjectBySlug } from '@/data/projects'
import { getCourseBySlug } from '@/data/courses'
import { ProjectDetail } from './ProjectDetail'
import { CourseDetail } from './CourseDetail'

export function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()

  // Check if it's a project or course
  const project = slug ? getProjectBySlug(slug) : null
  const course = slug ? getCourseBySlug(slug) : null

  if (project) {
    return <ProjectDetail />
  }

  if (course) {
    return <CourseDetail />
  }

  // Neither found - ProjectDetail will handle the 404
  return <ProjectDetail />
}
