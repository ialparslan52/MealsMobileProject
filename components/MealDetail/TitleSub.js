import {View,Text,StyleSheet,} from 'react-native';

function TitleSub({children}){
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
}

export default TitleSub;



const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center',
        padding: 6,
    },
    subTitleContainer: {
        padding: 6,
        margin: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
});