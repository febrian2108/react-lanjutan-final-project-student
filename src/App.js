import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Routes/Home';
import Student from './Routes/Student';
import AddStudent from './Routes/AddStudent';
import EditStudent from './Routes/EditStudent';
import NotFound from './Routes/NotFound';
import Footer from './components/Footer';
import { Container} from '@chakra-ui/react';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Container w={"100vw"} h={"100vh"} centerContent>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add' element={<AddStudent />} />
                    <Route path='/student' element={<Student />} />
                    <Route path='/student/:id' element={<EditStudent />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
            <Footer />
        </div >
    );
};

export default App;
