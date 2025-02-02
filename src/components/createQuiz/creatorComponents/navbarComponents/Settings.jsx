import { ChevronDown, LucideSettings, Settings2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Settings = () => {
    const [titleMaxLength, setTitleMaxLength] = useState(95);
    const [decMaxLength, setDecMaxLength] = useState(500);
    const [title, setTitle] = useState('');
    const [dec, setDec] = useState('');
    const [show, setShow] = useState(false);
    const [settingsSelectedType, setSettingsSelectedType] = useState('Basic information');
    const settingsMenubarRef = useRef(null);
    const [changeArrowDirection, setChangeArrowDirection] = useState(true);

    const settingsOptions = ['Basic information', 'Live quiz'];
    function handletitleInput(e) {
        setTitle(e.target.value);
        setTitleMaxLength(95 - e.target.value.length);
    }
    function handleDecInput(e) {
        setDec(e.target.value);
        setDecMaxLength(500 - e.target.value.length);
    }
    function selectSettingType() {
        if (settingsMenubarRef.current.classList.contains('custom-hide')) {
            settingsMenubarRef.current.classList.remove('custom-hide')
            setChangeArrowDirection(false);
        }
        else {
            settingsMenubarRef.current.classList.add('custom-hide')
            setChangeArrowDirection(true);
        }
    }
    return (
        <div className='bg-slate-50 px-4 py-2'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <LucideSettings />
                    <h3 className='font-bold capitalize text-lg'>Settings</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Link to={'../'}>
                        <button className='px-4 py-2 rounded bg-red-500'>Cancel</button>
                    </Link>
                    <Link to={'../'}>
                        <button className='px-4 py-2 rounded bg-red-500'>Done</button>
                    </Link>
                </div>
            </div>
            <div className="sm:grid place-items-center">
                {/* inner width div */}
                <div className="sm:w-4/5">
                    <div className="relative basic-settings">
                        <p className="font-semibold mb-1">Settings</p>
                        <div onClick={selectSettingType} className="sm:cursor-pointer flex items-center justify-between px-4 py-2 rounded border">
                            {settingsSelectedType}
                            <ChevronDown style={(changeArrowDirection) ? { rotate: '0deg' } : { rotate: '180deg' }} />
                        </div>
                        <ul ref={settingsMenubarRef} className="menubar custom-hide absolute w-full bg-white p-2 rounded shadow">
                            {
                                settingsOptions.map((option, index) => {
                                    return <li className='sm:cursor-pointer rounded p-2 hover:bg-gray-100 transition-all duration-200'>{(settingsSelectedType == option) ? <b>{option}</b> : option}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="basic-info-comp mt-4 bg-white p-2 rounded shadow">
                        <div className="mb-2">
                            <p className="font-semibold mb-2">Title</p>
                            <p>Enter a title for your quiz</p>
                            <div className="input mt-2 flex items-center gap-1 border rounded">
                                <input onChange={handletitleInput} type="text" className='outline-none w-full px-2 py-2' maxLength={95} />
                                <p className="px-2">{titleMaxLength}</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p className="font-semibold mb-2">Description <span className='text-gray-500'>(Optional)</span></p>
                            <p>Provide a short description for your quiz to increase visibility.</p>
                            <div className="input mt-2 flex items-center gap-1 border rounded">
                                <textarea rows={3} onChange={handleDecInput} className='outline-none resize-none w-full px-2 py-2' maxLength={500} />
                                <p className="px-2">{decMaxLength}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Settings