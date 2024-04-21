import { AppShell, NavLink } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <AppShell.Navbar p='md' style={{ gap: '10px' }}>
            <NavLink
                label='Flavanoids Table'
                onClick={() => navigate('/flavanoids_table')}
                style={{ margin: '5px' }}
            />
            <NavLink
                label='Gamma Table'
                onClick={() => navigate('/gamma_table')}
                style={{ margin: '5px' }}
            />
        </AppShell.Navbar>
    )
}

export default Navbar