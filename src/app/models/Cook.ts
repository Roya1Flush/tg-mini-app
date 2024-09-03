export interface Cook {
    id: string; // UUID
    telegramChatId: number;
    photoId: string; // UUID
    description: string;
    name: string;
    workDays: string;
    workTimeStart: Date; // LocalDateTime
    deliveryPrice: number; // BigDecimal
    workTimeEnd: Date; // LocalDateTime
    deliveryTimeStart: Date; // LocalDateTime
    deliveryTimeEnd: Date; // LocalDateTime
  }