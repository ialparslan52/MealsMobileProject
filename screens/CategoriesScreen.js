import { FlatList,StyleSheet} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import {CATEGORIES} from '../data/dummy-data'



function CategoriesScreen({navigation}) {//ekran gibi yüklendi
    
    function renderCategoryItem(itemData) { // burada return kullandık cünkü render item fonksiyonu geriye değer istiyor.
    
        function pressHandler(){
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id
            });
        }
        
        
        return (
            <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={pressHandler}/>
        );
    }
    
    
    
    
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;


const styles = StyleSheet.create({

});