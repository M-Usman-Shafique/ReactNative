import * as React from 'react';
import {Pressable, View, Text} from 'react-native';
import {Modal, Portal, PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomModal({
  visible,
  dismissable = true,
  icon = <Icon name="alert-circle-outline" size={24} color="white" />,
  title = 'Title',
  description = 'Description goes here',
  primaryButtonText = 'Confirm',
  secondaryButtonText = 'Cancel',
  onPrimaryPress,
  onSecondaryPress,
  hideModal,
}) {
  const containerStyle = {
    backgroundColor: '#1c1c1f',
    padding: 20,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 3,
    borderColor: 'silver',
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          dismissable={dismissable}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
          className="items-center">
          <View className="flex-row gap-1 items-center justify-center mb-1">
            {icon}
            <Text className="title text-white text-xl font-bold">{title}</Text>
          </View>
          <Text className="description text-base text-white text-center mb-4">
            {description}
          </Text>
          <View className="flex-row gap-2 mt-3">
            <Pressable
              onPress={onSecondaryPress || hideModal}
              className="flex-1 bg-gray-700 p-2 rounded-md shadow-lg">
              <Text className="text-lg font-semibold text-center text-gray-300">
                {secondaryButtonText}
              </Text>
            </Pressable>
            <Pressable
              onPress={onPrimaryPress || hideModal}
              className="flex-1 bg-red-700 p-2 rounded-md shadow-lg">
              <Text className="text-lg font-semibold text-center text-white">
                {primaryButtonText}
              </Text>
            </Pressable>
          </View>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}
