import * as React from 'react';
import {Button} from 'react-native-paper';
import CustomModal from './CustomModal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ModalUse() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleDelete = () => {
    console.log('Delete confirmed');
    hideModal();
  };

  const handleCancel = () => {
    console.log('Delete canceled');
    hideModal();
  };

  return (
    <>
      <Button
        style={{marginTop: 30, backgroundColor: '#333', borderRadius: 10}}
        labelStyle={{color: 'white', fontWeight: 'bold'}}
        onPress={showModal}>
        Show Modal
      </Button>
      <CustomModal
        visible={visible}
        dismissable={false}
        icon={<Icon name="trash" size={24} color="white" />}
        title="Delete Post"
        description="Are you sure you want to delete this post?"
        primaryButtonText="DELETE"
        secondaryButtonText="CANCEL"
        onPrimaryPress={handleDelete}
        onSecondaryPress={handleCancel}
        hideModal={hideModal}
      />
    </>
  );
}
