import { Layout, Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { CustomLayout } from "../components/CustomLayout";
import { CustomInput } from "../components/Input";
import "../components/lab3.css";
import { CustomLogin } from "../components/Login";
import { CustomCard } from "../components/MyCard";

const {Header } = Layout;


export const CustomHeader = () =>{
    return(
        <>
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key={1}>
                    <Link to="/">Login</Link>
                </Menu.Item>
                <Menu.Item key={2}>
                    <Link to="/cards">Cards</Link>
                </Menu.Item>
                <Menu.Item key={3}>
                    <Link to="/inputs">Inputs</Link>
                </Menu.Item>
                <Menu.Item key={4}>
                    <Link to="/interfaces">Interface</Link>
                </Menu.Item>
            </Menu>
        </Header>

        <Routes>
            <Route path='/' element={<CustomLogin />} />
            <Route path='/cards' element={<CustomCard />} />
            <Route path='/inputs' element={<CustomInput />} />
            <Route path='/interfaces' element={<CustomLayout />} />
        </Routes>
        </>
    );
}