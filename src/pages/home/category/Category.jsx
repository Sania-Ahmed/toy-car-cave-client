/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Car from '../../Car/Car';

const Category = () => {
    const [activeTab, setActiveTab] = useState('fire service car')
    const [toys, setToys] = useState([])
    const handleTab = (tabName) => {
        setActiveTab(tabName)
        console.log(tabName)
    }
    useEffect(() => {
        fetch(`https://toy-car-cave.vercel.app/cars/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])
    return (
        <div className='container p-7 my-20'>
            <Tabs>
                <TabList className='flex text-white justify-center gap-8 mb-5 font-bold text-xl md:text-3xl'>
                    <Tab className={activeTab === 'fire service car' ? 'text-info' : 'text-white'} onClick={() => handleTab('fire service car')}>Fire Car</Tab>
                    <Tab className={activeTab === 'monster car' ? 'text-info' : 'text-white'}  onClick={() => handleTab('monster car')}>Monster Car</Tab>
                    <Tab className={activeTab === 'truck' ? 'text-info' : 'text-white'}  onClick={() => handleTab('truck')}>Truck</Tab>
                </TabList>

                <TabPanel>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Car</th>
                                    <th>Seller</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    toys.map(toy => <Car toy={toy} key={toy._id}></Car>)
                                }
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Car</th>
                                    <th>Seller</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    toys.map(toy => <Car toy={toy} key={toy._id}></Car>)
                                }
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Car</th>
                                    <th>Seller</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    toys.map(toy => <Car toy={toy} key={toy._id}></Car>)
                                }
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;