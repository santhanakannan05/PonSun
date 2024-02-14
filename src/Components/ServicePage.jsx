import React from 'react';
import Card from './Card';
import "./ServicePage.css";

const ServicePage = () => {
    return (
        <div className="container services">
            <h2 className="main-title text-center">SERVICES</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Software Development "  text="We are providing the best software application product and one of the best customer support 24/7. " />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Digital Marketing"  text="The best digital marketing service is provided by the experience professional in the marketing and analysis product and promated" />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Animation Editing"  text="Animation videos are edited by the high quality editor and provied the high quality vidoes on the time ." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;


