import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    header: 'General',
    items: [
    ],
  },
  {
    header: 'Messages',
    items: [
      { id: 'reciepts', icon: '', label: 'Send Read Receipts', type: 'toggle' },
    ],
  },
  {
    header: 'Whos Allowed to Message You?',
    items: [
      { id: 'anyone', icon: '', label: 'Anyone', type: 'toggle' },
      { id: 'friends', icon: '', label: 'Friends', type: 'toggle' },
      { id: 'fof', icon: '', label: 'Friends of Friends', type: 'toggle' },
      { id: 'tq', icon: '', label: 'Trade Requests', type: 'toggle' },
    ],
  },
  {
    header: 'Notifications',
    items: [
      { id: 'ConP', icon: '', label: 'Comments on Posts', type: 'toggle' },
      { id: 'Replied', icon: '', label: 'Replies to Comments', type: 'toggle' },
      { id: 'Mesg', icon: '', label: 'Messages', type: 'toggle' },
      { id: 'TR', icon: '', label: 'Trade Requests', type: 'toggle' },
    ],
  },
  {
    header: 'Account',
    items: [],
  },
  {
    header: 'User Info',
    items: [
      { id: 'usrname', icon: '', label: 'Change Username', type: 'select' },
      { id: 'profname', icon: '', label: 'Update Profile Name', type: 'select' },
      { id: 'showprof', icon: '', label: 'Show My Profile Name instead of my Username', type: 'toggle' },
    ],
  },
  {
    header: 'Link Accounts',
    items: [
      { id: 'bsAcc', icon: '', label: 'Business Account', type: 'toggle' },
    ],
    },
    {
    header: 'Social Media',
    items: [
      { id: 'fb', icon: '', label: 'Facebook', type: 'toggle' },
      { id: 'ig', icon: '', label: 'Instagram', type: 'toggle' },
      { id: 'lin', icon: '', label: 'LinkedIn', type: 'toggle' },
    ],
},
{
    header: 'Security',
    items: [],
  },
  {
    header: 'Login',
    items: [
        { id: 'updateEmail', icon: '', label: 'Update Email Address', type: 'select' },
        { id: 'changePass', icon: '', label: 'Change Password', type: 'select' },
        { id: '2FV', icon: '', label: 'Enable 2 Factor Verification', type: 'toggle' },
    ],
  },
  {
    header: 'Account Visiability',
    items: [
        { id: 'enablePrvAccount', icon: '', label: 'Update Email Address', type: 'toggle' },
    ],
  },
  {
    header: 'Who Can See Your Account?',
    items: [
        { id: 'any', icon: '', label: 'Anyone', type: 'toggle' },
        { id: 'frd', icon: '', label: 'Friends', type: 'toggle' },
        { id: 'fof2', icon: '', label: 'Friend of Friends', type: 'toggle' },
    ],
  }
];


export default function Settings() {
  const [form, setForm] = useState({
    reciepts: true,
    anyone: true,
    friends: true,
    fof: true,
    tq: true,
    ConP: true,
    Replied: true,
    Mesg: true,
    TR: true,
    usrname: true,
    profname: true,
    showprof: true,
    bsAcc: true,
    fb: true,
    ig: true,
    lin: true,
    updateEmail: true,
    changePass: true,
    enablePrvAccount: true,
    any: true,
    frd: true,
    fof2: true,
  });

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileName}>John Doe</Text>

          <Text style={styles.profileEmail}>john.doe@mail.com</Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
          </TouchableOpacity>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon, type, value }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={styles.row}>
                        <FeatherIcon
                          color="#616161"
                          name={icon}
                          style={styles.rowIcon}
                          size={22}
                        />

                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}

                        {type === 'toggle' && (
                          <Switch
                          value={form[id]}
                          onChangeValue={value => setForm({...form, [id]: value })}
                          />
                        )}

                        {(type === 'select' || type === 'link') && (
                          <FeatherIcon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});