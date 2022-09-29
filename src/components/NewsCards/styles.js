import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
        justifyContent: 'space-between',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '55vh',
        padding: '5%',
        borderRadius: 10,
        color: 'white',
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
       
    },
    title: {
        marginBottom: 20,
        fontSize: 20,
    }
    
});

export default styles;