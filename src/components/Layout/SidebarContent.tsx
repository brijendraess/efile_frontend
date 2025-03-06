import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';

import { AccountTreeIcon, BackspaceIcon, CancelScheduleSendIcon, ClearIcon, CreateNewFolderIcon, DashboardIcon, FolderCopyIcon, FolderIcon, FormatListNumberedIcon, ForwardToInboxIcon, Groups2Icon, InfoIcon, ManageAccountsIcon, MarkAsUnreadIcon, MoveToInboxIcon, NoteAddIcon, NoteIcon, PersonAddAltIcon, QuestionMarkIcon } from '../Icons/AllIcons';

export const NAVIGATION: Navigation = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: 'organization',
        title: 'Orginazation Structure',
        icon: <AccountTreeIcon />,
    },
    {
        segment: 'directory',
        title: 'Directory',
        icon: <FolderCopyIcon />,
    },
    {
        title: 'Management Folder',
        icon: <FolderIcon />,
        children: [
            {
                segment: 'add-folder',
                title: 'Add Folder',
                icon: <CreateNewFolderIcon />,
            },
            {
                segment: 'folder_list',
                title: 'Folder List',
                icon: <FormatListNumberedIcon />,
            },
        ],
    },
    {
        segment: 'manage_letters',
        title: 'Manage Letter',
        icon: <MarkAsUnreadIcon />,
        children: [
            {
                segment: 'add_letters',
                title: 'Add Letters/ Documents',
                icon: <NoteAddIcon />,
            },
            {
                segment: 'my_letters',
                title: 'My Letters',
                icon: <NoteAddIcon />,
            },
            {
                segment: 'incoming_letters',
                title: 'Incoming Letters',
                icon: <MoveToInboxIcon />,
            },
            {
                segment: 'outgoing_letters',
                title: 'Outgoing Letters',
                icon: <ForwardToInboxIcon />,
            },
            {
                segment: 'dispatch_issue',
                title: 'Dispatch Issue',
                icon: <CancelScheduleSendIcon />,
            },
            {
                segment: 'receive_issue',
                title: 'Receive Issue',
                icon: <BackspaceIcon />,
            },
            {
                segment: 'details',
                title: 'Details',
                icon: <InfoIcon />,
            },
        ],
    },
    {
        segment: 'manage_files',
        title: 'Manage Files',
        icon: <NoteIcon />,
        children: [
            {
                segment: 'add_files',
                title: 'Add Files',
                icon: <NoteAddIcon />,
            },
            {
                segment: 'my_files',
                title: 'My Files',
                icon: <FormatListNumberedIcon />,
            },
            {
                segment: 'incoming_files',
                title: 'Incoming Files',
                icon: <MoveToInboxIcon />,
            },
            {
                segment: 'outgoing_files',
                title: 'Outgoing Files',
                icon: <ForwardToInboxIcon />,
            },
            {
                segment: 'closed_files',
                title: 'Closed Files',
                icon: <ClearIcon />,
            },
        ],
    },
    {
        segment: 'manage_users',
        title: 'Manage Users',
        icon: <ManageAccountsIcon />,
        children: [
            {
                segment: 'add_user',
                title: 'Add Users',
                icon: <PersonAddAltIcon />,
            },
            {
                segment: 'user_list',
                title: 'User List',
                icon: <Groups2Icon />,
            },
        ],
    },
    {
        segment: 'report',
        title: 'Report',
        icon: <ManageAccountsIcon />,
    },
    {
        segment: 'masters',
        title: 'Masters',
        icon: <ManageAccountsIcon />,
    },
    {
        segment: 'dms',
        title: 'DMS',
        icon: <ManageAccountsIcon />,
    },
    {
        kind: 'divider',
    },
    {
        segment: 'help',
        title: 'Help',
        icon: <QuestionMarkIcon />,
    },
];