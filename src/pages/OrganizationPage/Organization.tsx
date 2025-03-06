import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Collapse,
    Paper,
    Typography,
    useTheme,
    styled
} from '@mui/material';
import {
    ExpandLess,
    ExpandMore,
    Folder,
    Description
} from '@mui/icons-material';

interface TreeNode {
    id: string;
    label: string;
    children?: TreeNode[];
    isRoot?: boolean;
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
    paddingLeft: '24px !important',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: '50%',
        width: '12px',
        borderBottom: `2px solid ${theme.palette.divider}`,
    },
}));

const TreeNode: React.FC<{ node: TreeNode; level?: number }> = ({ node, level = 0 }) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const hasChildren = node.children && node.children.length > 0;

    return (
        <>
            <StyledListItem
                onClick={() => setOpen(!open)}
                sx={{
                    pl: `${level * 4}px !important`,
                    borderLeft: level > 0 ? `2px solid ${theme.palette.divider}` : 'none',
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                    }
                }}
            >
                <ListItemIcon sx={{ minWidth: '36px' }}>
                    {node.isRoot ? (
                        <Folder color="primary" />
                    ) : hasChildren ? (
                        <Folder fontSize="small" />
                    ) : (
                        <Description fontSize="small" />
                    )}
                </ListItemIcon>
                <ListItemText
                    primary={node.label}
                    primaryTypographyProps={{
                        variant: node.isRoot ? 'subtitle1' : 'body2',
                        fontWeight: node.isRoot ? 600 : 400
                    }}
                />
                {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
            </StyledListItem>

            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {node.children?.map((childNode) => (
                            <TreeNode
                                key={childNode.id}
                                node={childNode}
                                level={level + 1}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

const Organization = () => {
    const data: TreeNode = {
        id: '1',
        label: 'Council of States',
        isRoot: true,
        children: [
            {
                id: '2',
                label: 'Directorate of Committee Services',
                children: [
                    { id: '3', label: 'Land, Environment and Natural Resources (LENR)' },
                    { id: '4', label: 'National Cohesion, Equal Opportunity and Regional Integration (NCEO & RI)' },
                    { id: '5', label: 'Information, Communication & Technology (ICT)' },
                    { id: '6', label: 'Justice, Legal Affairs and Human Rights (ILA & HR)' },
                    { id: '7', label: 'Labour and Social Welfare (LSW)' },
                    { id: '8', label: 'Standing Committee' },
                    { id: '9', label: 'Agriculture, Livestock and Fisheries (ALF)' },
                    { id: '10', label: 'Devolution and Intergovernmental Relations (DIR)' },
                    { id: '11', label: 'Energy' },
                    { id: '12', label: 'Finance and Budget (F&B)' },
                    { id: '13', label: 'National Security, Defence and Foreign Relations(NSD & FR)' },
                    { id: '14', label: 'Tourism, Trade and Industrialization(TTI)' },
                    { id: '15', label: 'Directorate of Legal Services' },
                ]
            },
        ]
    };
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 2, width: '100%' }}>
            <List component="nav">
                <TreeNode node={data} />
            </List>
        </Paper>
    );
};

export default Organization;