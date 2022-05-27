import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <main>
                <div className='common-container'>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}