// pages/doctors.js
import Head from "next/head";
import Image from 'next/image';


const doctors = [
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    
    name: "Dr. Md. Mahfuzur Rahman",
    specialty: "Orthopaedics",
    phone: "+880 1755-123-4567",
    email: "emily.brown@hospital.com",
    social: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },

];

export default function Doctors() {
  return (
    <div className=" py-10">
     
      <Head >
       <title>Doctors Contact List</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-blue-500 mb-8">
          Doctors Contact List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img src="man.jpg" alt="Loading.."className="bg-slate-100 rounded-full p-1" width={100} />
              <h2 className="text-xl font-bold text-gray-800">
                {doctor.name}
              </h2>
              <p className="text-gray-600">{doctor.specialty}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Phone: {doctor.phone}</p>
                <p>Email: {doctor.email}</p>
              </div>
              <div className="mt-4 flex space-x-3">
                {doctor.social.linkedin && (
                  <a
                    href={doctor.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    LinkedIn
                  </a>
                )}
                {doctor.social.twitter && (
                  <a
                    href={doctor.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    Twitter
                  </a>
                )}
                {doctor.social.facebook && (
                  <a
                    href={doctor.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    Facebook
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
