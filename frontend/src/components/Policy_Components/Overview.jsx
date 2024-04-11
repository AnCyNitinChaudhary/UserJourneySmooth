import React from 'react'
import overview from '../../images/Ind_policy/overview.png'

const Overview = () => {
  return (
    <>
        <div className='flex mt-20'>
            <div className='w-1/2'><img src={overview} alt="" className='w-[20rem]' /></div>
            <div className='flex flex-col gap-y-10 w-1/2 text-justify -ml-20'>
                <div className='text-[1.7rem] text-[#0072BC] font-semibold'>Make your future bright with career connect <br /> CareerConnect</div>
                <div className='text-[1.2rem] w-[50rem]'>
These are the key requirements and skills for a Full Stack Web Developer:
Excellent management and communication abilities.
Effective project management and communication are crucial for successful web
development projects. Full Stack Developers should be skilled in managing tasks and
collaborating with teams.
The capacity to more quickly adapt to new technology, concepts, approaches, and
environments.
Web technologies evolve rapidly. Full Stack Developers must be adaptable and
quick learners to stay up-to-date with the latest trends and tools. Analytical and problem-solving capabilities.
Problem-solving is at the core of web development. Full Stack Developers should
have strong analytical skills to identify and resolve issues efficiently. A willingness to learn and an improving mindset.
- A continuous learning mindset is essential. Full Stack Developers should be open to
learning new technologies and improving their skills. Understanding of the app’s or product’s non-functional features, such as security,
automation, testing, performance, and optimization. Full Stack Developers should be well-versed in non-functional aspects like security,
automation, testing, performance, and optimization to ensure the quality of web
applications. Skills in resource management and leadership.
Effective resource management and leadership skills are valuable, especially when
leading development teams or projects. Front-end technology: Proficiency in basic front-end languages (HTML, CSS, JavaScript) and knowledge of
validation, responsiveness, and user experience. Familiarity with at least one front-end framework, such as Angular, React, Vue.js,
Backbone, or jQuery. Back-end technology: Knowledge of APIs, databases, and server configuration. Proficiency in at least one back-end framework (e.g., Django, Spring, .NET,
Express.js, or Rails) and at least one back-end language (e.g., PHP, Java, C#, Ruby, or
Python)
BACKEND ROLE:
These are the key requirements and skills for a Backend Developer: Excellent management and communication abilities. Effective project management and communication skills are essential, as Backend
Developers often collaborate with front-end developers, project managers, and other
stakeholders to ensure the successful implementation of web applications.
</div>
                
            </div>
        </div>
    </>
  )
}

export default Overview
