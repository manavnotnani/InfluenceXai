export enum EventEmitterEnum {
  TaskCreated = 'task.created',
  CompanyCreated = 'company.created',
  ContactCreated = 'contact.created',
  LeadCreated = 'lead.created',
  DealCreated = 'deal.created',
  TaskUpdated = 'task.updated',
  CompanyUpdated = 'company.updated',
  ContactUpdated = 'contact.updated',
  LeadUpdated = 'lead.updated',
  DealUpdated = 'deal.updated',
  EmailAttachmentReceived = 'attachment.received',
  WhatsAppNewTemplateToSendReceived = 'whatsapp-send-new-template.received',
  WhatsAppNewWebhookReceived = 'whatsapp-webhook.received',
  WhatsAppNewBroadcastToExecuteReceived = 'whatsapp-broadcast-executed.received',
  WhatsAppNewBroadcastContactsToProcessReceived = 'whatsapp-broadcast-contacts-process.received',
  WhatsAppNewBroadcastLeadsToProcessReceived = 'whatsapp-broadcast-leads-process.received',
  WhatsAppNewMediaToSyncReceived = 'whatsapp-media-to-sync.received',
  WhatsAppNewMessageRecorded = 'whatsapp-new-msg-recorded.received',
  WhatsAppNewMsgToSendReceived = 'whatsapp-new-msg-to-send.received',
}
