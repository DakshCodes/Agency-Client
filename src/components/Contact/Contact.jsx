import React, { useState } from 'react'
import { Button, Col, Form, Input, Modal, Row, Tabs, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import './Contact.css'
import Spinner from '../Spinner'
import { AddContact } from '../../apicalls/contact'

const rules = [
    {
        required: true,
        message: "Required",
    }
]




const Contact = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        console.log(values);

        try {
            setLoading(true);
            const response = await AddContact(values);
            setLoading(false);
            if (response.success) {
                message.success(response.message);
            }
        } catch (error) {
            setLoading(false);
            message.error(error.message);
        }
    }

    return (<div className="contact">
        <div className="screen">
            <div className="screen-body">
                <div className="screen-body-item">
                    <div className="app-title">
                        <span>CONTACT US
                            <span id="line1" className="line"></span>
                            <span id="line2" className="line"></span>
                        </span>

                    </div>
                </div>
            </div>
            <section className='text-white flex py-4'>
                <article className='m-auto w-[80%] bg-[#171717] p-2 '>
                    <div className="m-auto flex flex-col text-white  px-4">
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            className='w-full text-base'


                        >

                            <Row gutter={[16, 16]}>  {/* in antd row is of 24unit size and so we can create 3 columns of 8 unit size*/}
                                <Col span={12}>
                                    <span className='text-white font-semibold text-base'>First Name</span>
                                    <Form.Item label="" className='.form-item-label text-[#ffffffd9]' style={{ color: 'white' }} name={"first_name"} rules={rules}>
                                        <Input placeholder='' className='placeholder-gray-500 placeholder:font-semibold mt-3 text-white border-none rounded-md h-[2.4rem]' style={{ backgroundColor: '#3e3e3e' }} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <span className='text-white font-semibold text-base'>Last Name</span>
                                    <Form.Item label="" className='.form-item-label text-[#ffffffd9]' style={{ color: 'white' }} name={"last_name"} rules={rules}>
                                        <Input placeholder='' className='placeholder-gray-500 placeholder:font-semibold mt-3 text-white border-none rounded-md h-[2.4rem]' style={{ backgroundColor: '#3e3e3e' }} />
                                    </Form.Item>
                                </Col>

                            </Row>

                            <h1 className='font-semibold text-white mb-2'>What type of website are you looking for? </h1>

                            <Row gutter={[16, 16]}>  {/* in antd row is of 24unit size and so we can create 3 columns of 8 unit size*/}

                                <Col span={24}
                                >
                                    <Form.Item label="" name="website_type" rules={rules}>
                                        <select className='w-full h-[2.4rem] px-4 bg-[#3e3e3e] border-none text-white rounded-md cursor-pointer'>
                                            <option value=" ">Select</option>
                                            <option value="E- Commerce Website">E- Commerce Website</option>
                                            <option value="Bussiness Website">Bussiness Website</option>
                                            <option value="Portfolio Website">Portfolio Website</option>
                                        </select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <h1 className='font-semibold text-base text-white mb-2'>Choose your desired plan</h1>
                            <Row gutter={[16, 16]}>  {/* in antd row is of 24unit size and so we can create 3 columns of 8 unit size*/}

                                <Col span={24}
                                >
                                    <Form.Item label="" name="desired_plan" rules={rules}>
                                        <select className='w-full h-[2.4rem] px-4 bg-[#3e3e3e] border-none text-white rounded-md cursor-pointer'>
                                            <option value=" ">Select</option>
                                            <option value="Hour Based (1500/hr)">Hour Based (1500/hr)</option>
                                            <option value="Project Based (Custom Quote)">Project Based (Custom Quote)</option>
                                            <option value="Growth (Custom Quote)">Growth (Custom Quote)</option>
                                        </select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* phone and email */}
                            <Row gutter={[16, 16]}>  {/* in antd row is of 24unit size and so we can create 3 columns of 8 unit size*/}
                                <Col span={12}>
                                    <span className='text-white font-semibold text-base'>Phone No.</span>
                                    <Form.Item label="" className='.form-item-label text-[#ffffffd9]' style={{ color: 'white' }} name={"phone_no"} rules={rules}>
                                        <Input type="number" placeholder='' min={1} max={10} className='placeholder-gray-500 placeholder:font-semibold mt-3 text-white border-none rounded-md h-[2.4rem]' style={{ backgroundColor: '#3e3e3e' }} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <span className='text-white font-semibold text-base'>Email</span>
                                    <Form.Item label="" className='.form-item-label text-[#ffffffd9]' style={{ color: 'white' }} name={"email"} rules={rules}>
                                        <Input type='email' placeholder='' className='placeholder-gray-500 placeholder:font-semibold mt-3 text-white border-none rounded-md h-[2.4rem]' style={{ backgroundColor: '#3e3e3e' }} />
                                    </Form.Item>
                                </Col>

                            </Row>


                            {/* project description */}
                            <h1 className='font-semibold text-base text-white mb-2'>Project Description</h1>

                            <Form.Item label="" name="project_description" rules={rules}>
                                <TextArea type='text' className='placeholder-gray-500 placeholder:font-semibold mt-3 w-[full] text-white border-none rounded-md h-[2.4rem]' style={{ backgroundColor: '#3e3e3e' }} />
                            </Form.Item>

                            <Button disabled={loading} className='bg-green-600 border-none font-semibold hover:bg-green-900 hover:text-white w-[5rem]' block htmlType='submit'>
                                {!loading ? "Submit Details" : <Spinner />}
                            </Button>


                        </Form>

                    </div>
                </article>
            </section>
        </div>
    </div>
    )
}

export default Contact
