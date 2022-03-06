import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    
  },
  content:{
    flex: 1,
    alignItems: 'center',
  },
  buscar:{
    alignItems: 'center'
  },
  button:{
    width: 80,
    height: 40,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20
  },
  title:{
    textAlign: 'center',
    marginVertical: 35,
    fontSize: 50,
    color: theme.colors.primary,
  },
  input:{
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: 350,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderColor: theme.colors.border,
    color: theme.colors.text
  },
  info:{
    width: 350,
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
  },
  text:{
    fontSize: 15,
    color: theme.colors.text,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    padding: 8
  }
});