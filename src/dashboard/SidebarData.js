import React from 'react'
import { FaIcons } from 'react-icons/fa'
import { AiFillAudio} from 'react-icons/ai'
import { IoIosAdd } from "react-icons/io";
import { RiAncientPavilionFill } from "react-icons/ri";


export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiFillAudio.AiFillHome />,
        iconClosed:<RiAncientPavilionFill.RiArrowDownSFill />,
        iconClosed: <RiAncientPavilionFill.RiArrowUpSFill />,

        subNav:[
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIosAdd.IoIosPaper />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIosAdd.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiFillAudio.AiFillHome />,
        iconClosed:<RiAncientPavilionFill.RiArrowDownSFill />,
        iconClosed: <RiAncientPavilionFill.RiArrowUpSFill />,

        subNav:[
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIosAdd.IoIosPaper />
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIosAdd.IoIosPaper />,
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIosAdd.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Products',
        path: '.products',
        icon: <FaIcons.FaCartPlus />
    }
]