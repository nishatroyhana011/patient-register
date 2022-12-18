import React from 'react';

const Feature = () => {
    return (
        <div className='my-16'>
            <div className="shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://www.svgrepo.com/show/48945/hospital.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86</div>
                    <div className="stat-title">Registered Hospitals</div>
                    <div className="stat-desc text-emerald-600">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://www.svgrepo.com/show/48298/doctor.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">2.5 K</div>
                    <div className="stat-title">Experienced Doctors</div>
                    <div className="stat-desc text-emerald-600">Lorem ipsum dolor, sit amet consectetur</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://www.svgrepo.com/show/284208/patient.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">15.6 K</div>
                    <div className="stat-title">Patients</div>
                    <div className="stat-desc text-emerald-600">Lorem ipsum dolor, sit amet consectetur.</div>
                </div>
            </div>
        </div>
    );
};

export default Feature;