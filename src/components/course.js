import React from 'react';
import './course.css';
import {courses_taken} from '../data/courses_taken.js';
import {courses_ongoing} from '../data/courses_ongoing.js';

const CourseBlock = () => {
    return (
        <div id="course_block">
            <table id="courses_taken">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Name</th>
                        <th>Time Taken</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses_taken.map(course => {
                            return (
                                <tr key={course._id}>
                                    <td>{course._id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.time_taken}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <table id="courses_ongoing">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Name</th>
                        <th>Time Taken</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses_ongoing.map(course => {
                            return (
                                <tr key={course._id}>
                                    <td>{course._id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.time_taken}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CourseBlock;