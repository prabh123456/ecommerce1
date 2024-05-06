import React, { useContext } from 'react';
import myContext from '../../context/data/Mycontext';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <div>
            <section className=''>
                <div className='px-5 py-10 container mx-auto'>
                    <h1 className='text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className='text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className='text-pink-500'>customers</span> are saying</h2>
                    <div className='flex flex-wrap justify-center -m-4'>
                        <div className='p-4 md:w-1/3 drop-shadow-lg'>
                            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <div className='flex items-center justify-center'>
                                    <img className='rounded-full hover:shadow-2xl border border-pink-300 h-20 w-20 mt-4' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww" alt="Customer" />
                                </div>
                                <div className=''>
                                    <p className='mt-6 p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, felis ut aliquam efficitur,
                sem risus feugiat urna, nec accumsan est leo at eros. Integer nec quam at nisl malesuada condimentum.
                Vivamus vel libero nec nulla rhoncus interdum a vitae felis. In volutpat vestibulum urna, sed placerat
                velit vulputate ac. </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='p-4 md:w-1/3 drop-shadow-lg'>
                            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <div className='flex items-center justify-center'>
                                    <img className='rounded-full hover:shadow-2xl border border-pink-300 h-20 w-20 mt-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-rb28nw-4jJ-YjV1AsUI3ogxD7GQAVw9FXu8JXnFlA&s" alt="Customer" />
                                </div>
                                <div className=''>
                                    <p className='mt-6 p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, felis ut aliquam efficitur,
                sem risus feugiat urna, nec accumsan est leo at eros. Integer nec quam at nisl malesuada condimentum.
                Vivamus vel libero nec nulla rhoncus interdum a vitae felis. In volutpat vestibulum urna, sed placerat
                velit vulputate ac. </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='p-4 md:w-1/3 drop-shadow-lg'>
                            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <div className='flex items-center justify-center'>
                                    <img className='rounded-full hover:shadow-2xl border border-pink-300 h-20 w-20 mt-4' src="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg" alt="Customer" />
                                </div>
                                <div className=''>
                                    <p className='mt-6 p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, felis ut aliquam efficitur,
                sem risus feugiat urna, nec accumsan est leo at eros. Integer nec quam at nisl malesuada condimentum.
                Vivamus vel libero nec nulla rhoncus interdum a vitae felis. In volutpat vestibulum urna, sed placerat
                velit vulputate ac. </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;


