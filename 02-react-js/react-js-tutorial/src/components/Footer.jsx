const Footer = () => {
    const today = new Date();

    return (
        <footer style={{marginBottom: 25}}>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    );
};

export default Footer;
