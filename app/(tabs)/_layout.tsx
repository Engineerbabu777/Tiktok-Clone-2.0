import { Entypo, Feather } from '@expo/vector-icons';
import { Tabs } from "expo-router";



export default function TabsLayout() {


    return <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} /> }} />
        <Tabs.Screen name="friends" options={{ title: 'Home', tabBarIcon: ({ color }) => <Feather name="users" size={24} color={color} /> }} />
        <Tabs.Screen name="newPost" options={{ title: 'Home', tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} /> }} />

        <Tabs.Screen name="profile" options={{ title: 'Home', tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} /> }} />


    </Tabs>
}