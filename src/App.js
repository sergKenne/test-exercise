import React, {useState, useEffect} from 'react';
import {locationContext} from './context'
import './App.css';
import Header from './components/header/Header';
import MainContent from './components/content/MainContent';

function App() {

   const [locations, setLocations] = useState([]);


    useEffect(() => {
        asyncFetch();

        async function asyncFetch(){
            try {
                const response = await fetch("https://rcslabs.ru/locations.json");
                const data = await response.json();
                const results = addPropsChildren(data);
                const listTree = list_to_tree(results);
                setLocations(listTree)
                console.log("list_tree:", listTree);
            } catch(err) {
                console.log(err.message);
            }
        }

        function addPropsChildren(data) {
            const addProps = data.map(item => {
                return {
                    ...item,
                    children: []
                }
            });
            return addProps;
        }

        function list_to_tree(list) {
            var map = {}, node, roots = [], i;

            for (i = 0; i < list.length; i += 1) {
                map[list[i].id] = i;
                list[i].children = [];
            }

            for (i = 0; i < list.length; i += 1) {
                node = list[i];
                if (node.parent_id !== null) {
                    list[map[node.parent_id]].children.push(node);
                } else {
                    roots.push(node);
                }
            }
            return roots;
        }

    },[]);

  return (
    <locationContext.Provider value={locations}>  
        <div className="wrapper">
            <Header/>
            <MainContent/>
        </div>
    </locationContext.Provider>    
  );
}

export default App;
