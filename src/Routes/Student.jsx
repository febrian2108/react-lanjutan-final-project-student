import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Table, Thead, Tbody, Tr, Th, Td, Button, TableContainer } from "@chakra-ui/react";

const Student = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [filter, setFilter] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        filterStudents();
    }, [filter, students]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/student");
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.log(error);
        }
    };

    const filterStudents = () => {
        if (filter === "All") {
            setFilteredStudents(students);
        } else {
            const filteredData = students.filter(
                (student) => student.faculty === filter
            );
            setFilteredStudents(filteredData);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, { method: "DELETE" });
            const updatedStudents = students.filter(student => student.id !== id);
            setStudents(updatedStudents);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const navigateToEdit = (id) => {
        navigate(`/student/${id}`);
    };

    return (
        <div>
            <Select placeholder='Select option' value={filter} onChange={handleFilterChange} data-testid="filter">
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
            </Select>
            {students.length === 0 ? (
                <p>Loading ...</p>
            ) : (
                <TableContainer>
                    <Table id="table-student" variant='striped' colorScheme='twitter'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Full Name</Th>
                                <Th>Faculty</Th>
                                <Th>Program Study</Th>
                                <Th>Option</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredStudents.map((student, index) => (
                                <Tr key={student.id} className="student-data-row">
                                    <Td>{index + 1}</Td>
                                    <Td onClick={() => navigateToEdit(student.id)}>{student.fullname}</Td>
                                    <Td>{student.faculty}</Td>
                                    <Td>{student.programStudy}</Td>
                                    <Td>
                                        <Button onClick={() => handleDelete(student.id)} data-testid={`delete-${student.id}`} colorScheme="red">Delete</Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default Student;
