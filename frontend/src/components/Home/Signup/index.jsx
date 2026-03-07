import { Button, Card, Form, Input } from "antd";
import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Homelayout from "../../../layout/Homelayout";

const {Item} = Form;

const Signup = () => {
    return (
        <Homelayout>
             <div className="flex">
            <div className="w-1/2 hidden md:flex items-center justify-center">
                <img
                    src="exp-img.jpg"
                    alt="Bank"
                    className="w-4/5 object-contain"
                />          
            </div>
            <div className="w-1/2 hidden md:flex items-center justify-center p-2 md:p-6 bg-white">
                <Card className="w-full max-w-sm shadow-xl">
                    <h2 className="font-bold text-[#FF735C] text-2xl text-center mb-6">
                        Register To Track Your Expense
                    </h2>
                    <Form
                    name="login-form"
                    layout="vertical"
                    >
                        <Item
                        name="fullname"
                        label="Fullname"
                        rules={[{required:true}]}
                        >
                            <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter your fullname"
                            />
                        </Item>
                        <Item
                        name="mobile"
                        label="Mobile"
                        rules={[{required:true}]}
                        >
                            <Input
                            prefix={<PhoneOutlined />}
                            placeholder="Enter your mobile"
                            />
                        </Item>
                        <Item
                        name="username"
                        label="Username"
                        rules={[{required:true}]}
                        >
                            <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter your username"
                            />
                        </Item>
                        <Item
                        name="password"
                        label="Password"
                        rules={[{required:true}]}
                        >
                            <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Enter your password"
                            />
                        </Item>
                        <Item>
                            <Button
                            type="text"
                            htmlType="submit"
                            block
                            className="!bg-[#FF735C] !text-white !font-bold"
                            >
                                Signup
                            </Button>
                        </Item>
                    </Form>
                    <div className="flex items-center justify-between">
                        <Link
                            style={{ textDecoration: "underline" }}
                            to="#"
                            className="!text-[#FF735C] !font-bold"
                        >
                        </Link>
                        <Link
                            style={{ textDecoration: "underline" }}
                            to="/"
                            className="!text-[#FF735C] !font-bold" 
                        >   
                            Already have an accoount?
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
        </Homelayout>
    )
}
export default Signup;