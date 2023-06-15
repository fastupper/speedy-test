import * as React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Landing from './components/Landing/Landing';
import MyEditor from './components/MyEditor/MyEditor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {  
  return (
    <React.Fragment>
        <Container maxWidth="lg">
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/write" element={<MyEditor />} />
                </Routes>
            </Router>
        </Container>
    </React.Fragment>
  );
}