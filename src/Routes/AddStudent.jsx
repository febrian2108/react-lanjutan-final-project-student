import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input , Center, Container} from "@chakra-ui/react";

const AddStudent = () => {
    const [fullname, setFullname] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [programStudy, setProgramStudy] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const faculty = getFacultyByProgramStudy(programStudy);
        const newStudent = { fullname, profilePicture, address, phoneNumber, birthDate, gender, faculty, programStudy };

        try {
            await fetch("http://localhost:3001/student", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newStudent),
            });
            navigate("/student");
        } catch (error) {
            console.log(error);
        }
    };

    const getFacultyByProgramStudy = (programStudy) => {
        switch (programStudy) {
            case "Ekonomi":
            case "Manajemen":
            case "Akuntansi":
                return "Fakultas Ekonomi";
            case "Administrasi Publik":
            case "Administrasi Bisnis":
            case "Hubungan Internasional":
                return "Fakultas Ilmu Sosial dan Politik";
            case "Teknik Sipil":
            case "Arsitektur":
                return "Fakultas Teknik";
            case "Matematika":
            case "Fisika":
            case "Informatika":
                return "Fakultas Teknologi Informasi dan Sains";
            default:
                return "";
        }
    };

    return (
        <Container>
            <form onSubmit={handleFormSubmit}>
                <FormControl>
                    <FormLabel htmlFor="fullname">Full Name:</FormLabel>
                    <Input
                        type="text"
                        id="fullname"
                        value={fullname}
                        onChange={(event) => setFullname(event.target.value)}
                        data-testid="name"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="profilePicture">Profile Picture:</FormLabel>
                    <Input
                        type="text"
                        id="profilePicture"
                        value={profilePicture}
                        onChange={(event) => setProfilePicture(event.target.value)}
                        data-testid="profilePicture"
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="address">Address:</FormLabel>
                    <Input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        data-testid="address"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
                    <Input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        data-testid="phoneNumber"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="birthDate">Birth Date:</FormLabel>
                    <Input
                        type="text"
                        id="birthDate"
                        value={birthDate}
                        onChange={(event) => setBirthDate(event.target.value)}
                        data-testid="date"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="gender">Gender:</FormLabel>
                    <Input
                        type="text"
                        id="gender"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                        data-testid="gender"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="programStudy">Program Study:</FormLabel>
                    <Input
                        type="text"
                        id="programStudy"
                        value={programStudy}
                        onChange={(event) => setProgramStudy(event.target.value)}
                        data-testid="prody"
                    />
                </FormControl>
                <Center p={4}>
                <Button type="submit" colorScheme="Blue" data-testid="add-btn">Add Student</Button>
                </Center>
            </form>
        </Container>
    );
};

export default AddStudent;
