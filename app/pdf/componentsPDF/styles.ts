import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    padding: '10px',
    paddingHorizontal: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100px',
    // backgroundColor: '#37383D',
    // color: '#FEFFFF',
    borderBottom: '1px solid black',
  },
  aside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '200px',
    padding: '10px',
    // backgroundColor: '#EEE7E1',
    color: '#393836',
  },
  h1: {
    fontSize: '40px',
    fontWeight: 'light',
  },
  h2: {
    fontFamily: 'Helvetica',
    fontSize: '24px',
    fontWeight: 'extralight',
  },
  h3: {
    fontFamily: 'Helvetica',
    fontSize: '18px',
    fontWeight: 'light',
  },
});

export default styles;
