import React from 'react';
import { Accordion } from './Accordion';

export const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: "Why should I use CodeBook?",
            answer: "CodeBook may offer a structured platform to learn programming languages, frameworks, and coding techniques in one place."
        },
        {
            id: 2,
            question: "Can I access eBooks on mobile?",
            answer: "Yes, you can typically access an eBook on a mobile device, depending on the platform or format of the eBook."
        },
        {
            id: 3,
            question: "Do you offer refunds?",
            answer: "Yes, refunds may be available depending on the platform's policy. Please check the refund terms carefully."
        },
        {
            id: 4,
            question: "Do you support international payments?",
            answer: "Yes, CodeBook supports international payments including Visa, MasterCard, and American Express."
        },
    ];

    return (
        <section className="my-10 px-6 py-8 max-w-4xl mx-auto border rounded-lg bg-blue dark:bg-gray-500 dark:border-gray-700 shadow-md">
            <h1 className="text-3xl font-bold text-center text-black-800 dark:text-black underline underline-offset-4 mb-8">
                Questions in Mind?
            </h1>
            <div className="space-y-4">
                {faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    );
};
