import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
// import * as IoIcons  from "react-icons/io";

export const SidebarData = [

  {
    title: 'Dashboard',
    path: '/dash',
    icon: <IoIcons.IoMdDesktop />
  },
  {
    title: 'People',
    path: '/dash/People',
    icon: <IoIcons.IoMdContact />
  },
  {
    title: 'Groups',
    path: '/dash/Groups',
    icon: <IoIcons.IoMdContacts />
  },
  {
    title: 'Events',
    path: '/dash/Events',
    icon: <IoIcons.IoIosApps />
  },
  {
    title: 'Follow up',
    path: '/dash/Follow',
    icon: <IoIcons.IoIosEye />
  },
  {
    title: 'Calender',
    path: '/dash/Calender',
    icon: <IoIcons.IoIosCalculator />
  },
  {
    title: 'Forms',
    path: '/dash/Form',
    icon: <IoIcons.IoIosGrid />
  },
  {
    title: 'Notifications',
    path: '/dash/Notifications',
    icon: <IoIcons.IoIosNotifications />
  },
  {
    title: 'Reports',
    path: '/dash/Reports',
    icon: <IoIcons.IoIosMegaphone />
  },
  {
    title: 'Member',
    path: '/dash/Member',
    icon: <IoIcons.IoIosPeople />
  },
  {
    title: 'Contribution',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Contribution',
        path: '/dash/Contribution',
        icon: <IoIcons.IoMdArrowRoundForward />
      },
      {
        title: 'Batches',
        path: '/dash/Tche',
        icon: <IoIcons.IoMdArrowRoundForward />
      },
      {
        title: 'Funds',
        path: '/dash/Funds',
        icon: <IoIcons.IoMdArrowRoundForward />
      },
      {
        title: 'Payments Methods',
        path: '/dash/Payments',
        icon: <IoIcons.IoMdArrowRoundForward />
      },
      {
        title: 'Online Giving',
        path: '/dash/Online',
        icon: <IoIcons.IoMdArrowRoundForward />
      },
      {
        title: 'Envelopes',
        path: '/dash/Envelopes',
        icon: <IoIcons.IoMdArrowRoundForward />
      }
    ]
  },
  {
    title: 'Management',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/dash/Users',
        icon: <IoIcons.IoMdArrowRoundForward />,
      },
      {
        title: 'Roles $ Permissions',
        path: '/dash/Roles',
        icon: <IoIcons.IoMdArrowRoundForward />
      }
    ]
  },
  {
    title: 'Help',
    path: '/dash/Help',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Log Out',
    path: '/dash/Logout',
    icon: <IoIcons.IoIosLogOut />
  }
];