import React, { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Tabs = (props) => {

    const { children, tabStyle } = props;
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="mx-auto max-w-5xl">
            <div className={tabStyle ? tabStyle : ''}>
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={classNames(
                            activeTab === child.props.label ? 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' : 'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                            , 'rounded px-3 py-2 text-md mx-3 font-semibold cursor-pointer')}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden">
            {children}
        </div>
    );
};

export { Tabs, Tab };