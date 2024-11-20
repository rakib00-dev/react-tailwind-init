import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import MainLayouts from './layouts/MainLayouts';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import { toast } from 'react-toastify';

const App = () => {
  // add job to the job page
  async function addJob(newJob) {
    const res = fetch('/api/jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    toast.success('Added New Job Successfully');
    return;
  }

  // delete job
  function deleteJob(id) {
    const res = fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  // update jobs
  const updateJob = async (job) => {
    const res = fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="jobs/edit/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      // {
      //   path: '/',
      //   element: <MainLayouts></MainLayouts>,
      //   children: [
      //     {
      //       path: '/',
      //       element: <HomePage></HomePage>,
      //     },
      //     {

      //     }
      //   ],
      // }
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
