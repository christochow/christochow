import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <AppBar sx={{height: '50px', background: "#090A0F"}}>
            <Toolbar sx={{height: '50px', background: "#090A0F"}}>
                <Typography  sx={{ flexGrow: 1 }}>
                    <Link href="/"><a className={styles.link}>Home</a></Link>
                </Typography>
                <Typography sx={{ flexGrow: 1 }}>
                    <Link href="/projects"><a className={styles.link}>Projects</a></Link>
                </Typography>
                <Typography sx={{ flexGrow: 1 }}>
                    <Link href="/tiktaktoe"><a className={styles.link}>Tiktaktoe</a></Link>
                </Typography>
                <Typography sx={{ flexGrow: 1 }}>
                    <Link href="/contact"><a className={styles.link}>Contact</a></Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;