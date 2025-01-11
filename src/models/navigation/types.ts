import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  List: undefined;
  Detail: {id: number};
};

export type IStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export type IStackNavigation<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>['navigation'];
