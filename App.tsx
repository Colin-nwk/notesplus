import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditNoteScreen } from "./screens/EditNoteScreen";
import { RootStackParamList } from "./shared/types";

import { NewNoteButton } from "./components/NewNoteButton";
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "All Notes",
            headerRight: () => <NewNoteButton />,
          }}
        />

        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
