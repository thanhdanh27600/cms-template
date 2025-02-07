import type { Attribute, Schema } from '@strapi/strapi';

export interface ContentContentItem extends Schema.Component {
  collectionName: 'components_content_content_items';
  info: {
    description: '';
    displayName: 'Content Item';
    icon: 'bulletList';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface MediaMediaItem extends Schema.Component {
  collectionName: 'components_media_media_items';
  info: {
    description: '';
    displayName: 'Media Item';
    icon: 'attachment';
  };
  attributes: {
    key: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    value: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.content-item': ContentContentItem;
      'media.media-item': MediaMediaItem;
    }
  }
}
