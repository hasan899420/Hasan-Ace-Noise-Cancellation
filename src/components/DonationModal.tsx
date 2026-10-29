import * as theme from "@/src/constants/theme";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as Linking from "expo-linking";
import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface DonationModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function DonationModal({ visible, onClose }: DonationModalProps) {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <Pressable
          style={styles.modalContent}
          onPress={(e) => e.stopPropagation()}
        >
          <Text style={styles.modalTitle}>Support Development</Text>

          <Text style={styles.creditText}>
            This app is a fork of DeepDenoiser by Sayampy.
          </Text>

          <TouchableOpacity
            style={[styles.donationButton, styles.githubButton]}
            onPress={() => openLink("https://github.com/sayampy/deepdenoiser")}
          >
            <Feather
              name="github"
              size={24}
              color="white"
              style={styles.githubIcon}
            />
            <Text style={styles.githubText}>Original Project on GitHub</Text>
          </TouchableOpacity>

          <Text style={styles.creditText}>Fork branding by Hasan®. No donation payment is collected in this fork.</Text>

          <TouchableOpacity
            style={[
              theme.Styles.button,
              theme.Styles.buttonSecondary,
              styles.closeButton,
            ]}
            onPress={onClose}
          >
            <Text
              style={[
                theme.Styles.buttonText,
                theme.Styles.buttonTextSecondary,
              ]}
            >
              Close
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: theme.COLORS.surface,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: theme.FONT_SIZE.heading,
    fontWeight: "700",
    color: theme.COLORS.text,
    marginBottom: 24,
  },
  creditText: {
    fontSize: theme.FONT_SIZE.body,
    color: theme.COLORS.text,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 22,
  },
  donationButton: {
    width: "100%",
    height: 56,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  kofiImage: {
    width: "100%",
    height: "100%",
  },
  githubButton: {
    backgroundColor: "#24292e",
    borderRadius: 18,
    flexDirection: "row",
  },
  githubIcon: {
    marginRight: 10,
  },
  githubText: {
    fontSize: theme.FONT_SIZE.body,
    fontWeight: "600",
    color: "white",

  },
  upiButton: {
    backgroundColor: "orange",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.COLORS.border,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
  },
  upiIcon: {
    height: 20,
    marginRight: 5,
  },
  upiText: {
    fontSize: theme.FONT_SIZE.body,
    fontWeight: "600",
    color: theme.COLORS.surface,
    marginRight: 25,
  },
  closeButton: {
    width: "100%",
    marginTop: 8,
  },
});
