import React from 'react';

export default function App() {
    return (
        <div className="flex justify-center m-5 py-5" >

        <div className="w-96">
            <a
                href="#"
                aria-current="true"
                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600"
            >
                The current link item
            </a>
            <a
                href="#"
                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
            >
                A second link item
            </a>
            <a
                href="#"
                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
            >
                A third link item
            </a>
            <a
                href="#"
                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
            >
                A fourth link item
            </a>
            <a
                href="#"
                className="block w-full cursor-default p-4 text-neutral-500 focus:outline-none focus:ring-0"
            >
                A disabled link item
            </a>
        </div>
    </div>
    );
}