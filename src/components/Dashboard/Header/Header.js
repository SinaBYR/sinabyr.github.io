import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { SecondaryLink } from '../../Utilities';

const Header = () => {
    return (
        <header className={classes.Header}>
            <Link to="/">Dashboard</Link>
            <SecondaryLink to="/create">Create a new project</SecondaryLink>
        </header>
    )
}

export { Header }