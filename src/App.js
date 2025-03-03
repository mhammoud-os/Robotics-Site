import React, { useState } from 'react';

const App = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [careerDetails, setCareerDetails] = useState(null);

    const sections = {
        introduction: {
            title: "Introduction to Robotics",
            content: "Robotics is the design, construction, operation, and application of robots. The field of computer science makes robots smart—from computer vision to if statements—and amazing technology comes together to do cool things."
        },
        societal: {
            title: "Societal Impacts",
            content: [
                {
                    subtitle: "Job Displacement & Creation",
                    text: "Robots have the power to destroy jobs and create new ones. This will have a massive impact on society as a massive amount of people will have to upskill to be able to make a living."
                },
                {
                    subtitle: "Improved Quality of Life",
                    text: "Robots increase efficiency; the same number of people are able to do more. This increases the quality of life as there are more products/services to go around."
                },
                {
                    subtitle: "Education & Skill Development",
                    text: "STEM fields like robotics are driving the push for integrating STEM in the classroom. An example of this is teaching programming in math classes."
                },
                {
                    subtitle: "Robot Dependency",
                    text: "As robots become more common, humans will become more dependent on them. In the future, skills like washing dishes and cleaning floors will become nonexistent."
                }
            ]
        },
        economic: {
            title: "Economic Impacts",
            content: [
                {
                    subtitle: "Increased Productivity & Efficiency",
                    text: "As mentioned above, robots will increase productivity. This increase in productivity means you can do more with your dollar. Companies will enjoy cost reduction, and consumers will enjoy a reduction in price."
                },
                {
                    subtitle: "Industry Shifts",
                    text: "Entire industries will change. For example, self-driving vehicles might put taxi drivers out of business."
                },
                {
                    subtitle: "Global Competitiveness",
                    text: "Countries that invest in robotics will enjoy the long-term economic advantages, while countries that don't will fall behind."
                }
            ]
        },
        ethics: {
            title: "Ethics in Robotics",
            content: [
                {
                    subtitle: "Job Displacement and Economic Inequality",
                    text: "Is replacing humans with robots ethical? Some people think it's unethical and some people think it's not. People are replaced by robots and the ones to gain. The rich get richer and the poor get poorer."
                },
                {
                    subtitle: "Bias in AI and Autonomous Systems",
                    text: "AI has bias; this bias gets translated into robots. The robots perform real-world actions which impact real people. An example of this is a self-driving car about to crash—will it crash into an old person or a young one? AI won't be able to think ethically and this results in potential unethical behavior in certain conditions."
                },
                {
                    subtitle: "Privacy and Surveillance Concerns",
                    text: "Robots like drones have the potential to spy on people. As these drones get smaller and quieter, it becomes harder and harder to tell if someone is spying on you."
                },
                {
                    subtitle: "Autonomous Weapons and Warfare",
                    text: "Robots and AI are the future of warfare. If you don't use technology you fall behind and lose the war. This results in a push to automate every aspect of warfare, including making decisions to kill people. Robots are going to kill people in war. They are already doing so."
                },
                {
                    subtitle: "Moral and Legal Accountability",
                    text: "If an autonomous robot causes harm (e.g., a self-driving car crashes), who is ethically responsible? This question is very hard to answer and might result in the legal system punishing the wrong people."
                }
            ]
        },
        careers: {
            title: "Careers in Robotics",
            content: [
                {
                    subtitle: "Robotics Engineering",
                    details: {
                        role: "Designs, builds, and maintains robots.",
                        skills: "Mechanical design, control systems, embedded systems, and AI integration.",
                        education: "Bachelor's or master's degree in Robotics, Mechanical Engineering, Electrical Engineering, or Mechatronics."
                    }
                },
                {
                    subtitle: "AI and Machine Learning Engineer",
                    details: {
                        role: "Develops AI-driven robotics.",
                        skills: "Neural networks, deep learning, reinforcement learning.",
                        education: "Bachelor's degree in Computer Science"
                    }
                },
                {
                    subtitle: "Software Engineer for Robotics",
                    details: {
                        role: "Writes the code that controls robotic movements",
                        skills: "C++, Python, ROS (Robot Operating System)",
                        education: "Bachelor's degree in Computer Science, Software Engineering, or Robotics."
                    }
                },
                {
                    subtitle: "Mechatronics Engineer",
                    details: {
                        role: "Integrates mechanical, electrical, and software components in robots",
                        skills: "Circuit design, microcontrollers, sensors, actuators, and control systems.",
                        education: "Bachelor's degree in Mechatronics, Electrical, or Mechanical Engineering."
                    }
                },
                {
                    subtitle: "Biomedical Robotics Engineer",
                    details: {
                        role: "Develops robotic prosthetics, exoskeletons, and surgical robots.",
                        skills: "Biomechanics, medical imaging, control systems.",
                        education: "Biomedical Engineering, Robotics, or Mechatronics."
                    }
                }
            ]
        },
        education: {
            title: "Education Pathways",
            content: [
                {
                    subtitle: "High School",
                    text: "Join technical clubs, take English, Physics, Math, and Chemistry (apparently chemistry is a requirement)."
                },
                {
                    subtitle: "University",
                    text: "Get a Bachelor's in engineering or Computer Science."
                },
                {
                    subtitle: "Post University",
                    text: "Become a lifelong learner, e.g., take courses on Coursera"
                }
            ]
        },
        project: {
            title: "Robotics Project Example",
            content: {
                pdf: true
            }
        }
    };

    const renderContent = () => {
        const section = sections[activeSection];

        if (activeSection === 'introduction') {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg">{section.content}</p>
                </div>
            );
        }

        if (activeSection === 'project') {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-blue-700">Autonomous Litter Detection and Recovery System</h3>
                    <div>
                        <iframe
                            src="https://malekhammoud.com/Autonomous_Litter_Detection_and_Recovery_System.pdf#zoom=110&toolbar=1&navpanes=0"
                            width="100%"
                            height="600px"
                            className="border border-gray-300 rounded"
                            title="Autonomous Litter Detection and Recovery System PDF"
                        >
                            This browser does not support PDFs. Please download the PDF to view it:
                            <a href="https://malekhammoud.com/Autonomous_Litter_Detection_and_Recovery_System.pdf">Download PDF</a>
                        </iframe>
                    </div>
                </div>
            );
        }

        if (Array.isArray(section.content)) {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {section.content.map((item, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            <h3 className="text-xl font-bold mb-2 text-blue-700">{item.subtitle}</h3>
                            {item.text ? (
                                <p className="text-gray-700">{item.text}</p>
                            ) : (
                                <div className="flex justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => setCareerDetails(item)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 p-4">
            <header className="bg-blue-800 text-white p-6 rounded-lg shadow-lg mb-6">
                <h1 className="text-3xl font-bold mb-2">Exploring the World of Robotics</h1>
                <p className="text-lg">Discover impacts, careers, education pathways, and project examples in robotics</p>
            </header>

            <div className="flex flex-col md:flex-row flex-grow">
                <nav className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0 md:mr-6">
                    <ul>
                        {Object.entries(sections).map(([key, section]) => (
                            <li key={key} className="mb-2">
                                <button
                                    className={`w-full text-left py-2 px-4 rounded ${
                                        activeSection === key
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                                    onClick={() => {
                                        setActiveSection(key);
                                        setCareerDetails(null);
                                    }}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <main className="flex-grow">
                    <h2 className="text-2xl font-bold mb-4">{sections[activeSection].title}</h2>

                    {careerDetails ? (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-blue-700">{careerDetails.subtitle}</h3>
                                <button
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                                    onClick={() => setCareerDetails(null)}
                                >
                                    Back
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-800 mb-2">Role</h4>
                                    <p>{careerDetails.details.role}</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-800 mb-2">Skills</h4>
                                    <p>{careerDetails.details.skills}</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-purple-800 mb-2">Education</h4>
                                    <p>{careerDetails.details.education}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        renderContent()
                    )}
                </main>
            </div>

            <footer className="mt-6 bg-blue-800 text-white p-4 rounded-lg shadow-lg text-center">
                <p>© 2025 Robotics Explorer | Interactive Learning Resource</p>
            </footer>
        </div>
    );
};

export default App;