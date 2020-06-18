const db  = require('./index.js');
const Gallery = require('./Gallery.js');

const sampleGallery = [
{
   user_id: 0,
   room_id: 0,
   room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/63cfabaa-bd33-4aa7-8471-39867a926b9a.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/2ed48fb2-cd21-417e-9954-514089cba203.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/8cfbeaa0-958c-486e-aa07-dbace9509e51.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/7873f200-f8f1-45ca-9421-6fd618c27d9f.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/a5ac73c8-ba40-41db-b85e-7b75e67c0b3c.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/34d46ccd-015b-4a34-9858-355d06397c9a.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/019dc6cc-5790-4870-841c-cbf01e7ad65d.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/91fb4543-6839-4f2c-8680-d46dae33720d.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/9e29f45b-6076-4afe-8a91-6ee9578f4020.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/62670305/7014e734_original.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/47027e1f-6595-4ec2-80c6-833efc143ddb.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 2,
  room_id: 2,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/3466b025-d385-43ea-9ee4-4f0aff92e960.jpg?im_w=1200', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/a1e20372-5b41-4cf4-906e-0b2461104883.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/67b843af-2cc3-4caa-8ae6-e0830087544a.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/0a81a8ce-53eb-4d24-be40-2758eeb5d925.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/eb6e42df-2e43-416e-9250-70e54a9afb3c.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/a9b26109-2b68-4597-8e86-b7016f3c75b9.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/e4ad5440-58c5-4961-b6e3-d6b869c8a75b.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/59d51bd4-1f82-4cee-af49-75c13e3eb61b.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/8157fc51-e580-4921-b370-b3dd1584e8f0.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/3b0acc1d-f950-48fa-9539-cbafb8f111ba.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/d9644c71-453c-49ee-9bd5-bc1dd21cf59f.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/defb2373-0d53-4a8a-ac7e-ab9c1eb02473.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 3,
  room_id: 3,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/94da148a-d066-4737-b555-532239cfdad6.jpg?im_w=1200', description: 'First rate mattress and linens. Solid bed, no wobbling. Night stands, reading light, and electric outlets on each side.'},{imageUrl: 'https://a0.muscache.com/im/pictures/83020e21-3b29-478d-aeb2-f0ea9f24d885.jpg?im_w=1920', description: 'Big king bed.'},{imageUrl: 'https://a0.muscache.com/im/pictures/6de1fb7d-9cdf-4a71-bb67-1cf8588240d5.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/e19b856d-5fe9-4f01-95b7-e61d4b474816.jpg?im_w=1920', description: 'Steps to the hot tub. Comfy chairs and work space.'},{imageUrl: 'https://a0.muscache.com/im/pictures/2dd06029-a297-4f52-841e-471c094d5ec9.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/7058d041-9805-4f0f-821b-bbf35c9848e0.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/ae5a0e44-8147-402b-b976-9dc8f8a3dafe.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/365a3a29-e917-4000-9e83-c1ea9903df29.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/c69c9e68-91a6-44d2-9d4c-2f03816d0d7c.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/fff7c5d5-6995-4e45-b5e2-7184bfe17f4b.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/5d71dbe0-9cf6-4bf8-9a43-5ddcef891b6a.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/f0512c64-f3f2-42c4-b3f9-0f8df5357e7d.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/a0a8d267-ac2d-4125-b2ca-8ee5b89fd882.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 4,
  room_id: 4,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/72ac42ac-9d08-4c85-afde-c08135f46dbb.jpg?im_w=1200', description: 'That view! View from the front deck, looking out on Corona Heights Park, the Transamerica Building, City Hall, the Bay Bridge, and the East Bay.'},{imageUrl: 'https://a0.muscache.com/im/pictures/89977690/3bbe40f8_original.jpg?im_w=1920', description: 'Beautiful view of SF skyline, Corona Park, and Buena Vista Park, visible from our front deck, living room, and dining room.'},{imageUrl: 'https://a0.muscache.com/im/pictures/ed87e479-6207-4ec4-9f4c-b5884174be0c.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/3ab86e5f-46b0-4f01-904c-8de2c9fa131c.jpg?im_w=1920', description: 'Your guest bedroom.'},{imageUrl: 'https://a0.muscache.com/im/pictures/477cd4d3-0ff5-4116-8811-aaab338396b0.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/6e5a94bd-dcb8-4c91-8836-93e732c6a190.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/b94ee31d-1e0c-4ddb-9661-0a6ba3536fbd.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/87a1ab91-4e85-4ba5-a27a-486c8d6f939d.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/3e4ab2ac-d210-4791-b60b-acdc6c94de4f.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/99a11fc1-14b0-4a0c-b308-6768ce256b8f.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/4c1926ac-050b-4bf6-80ac-1887e01f571e.jpg?im_w=1920', description: 'Fully equipped kitchen with updated appliances.'}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 5,
  room_id: 5,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/0ed6c128-7d60-4e05-b3bf-63158a230f70.jpg?im_w=1200', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/f187c923-bb7f-4370-978a-0d762d6c0da9.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/95934b8d-3a97-41c9-aa7f-603e13fba3cb.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/cf7d1975-f594-4040-9ddc-24d90786cfdb.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/382f046a-54f8-4b57-95ee-76710bdd6f4b.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/844e4751-fb3a-4262-940a-e4c5e135175f.jpg?im_w=1920', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 6,
  room_id: 6,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/d888ab4c-58ff-49b7-bd4a-c0ad72b90e3a.jpg?im_w=960', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/ab915730-f0eb-4536-9a16-a3b286b7fe30.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/8aa96c88-c338-431e-a2af-da5ac57cf44b.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/c3350b18-db58-4c7c-a071-d87f48b95873.jpg?im_w=1920', description: 'living room'},{imageUrl: 'https://a0.muscache.com/im/pictures/276404fe-6ca5-460a-ad77-e997377deb6b.jpg?im_w=1920', description: 'Living room/kitchenette. Soft and warm cork floors throughout.'},{imageUrl: 'https://a0.muscache.com/im/pictures/034b32cc-e0ec-4b1c-909f-f7f13e0912fc.jpg?im_w=1920', description: 'There is always tea and and coffee available and basic sundries in the cabinets.'},{imageUrl: 'https://a0.muscache.com/im/pictures/e3ea2031-37d6-4d16-8834-00619e768562.jpg?im_w=1920', description: 'Plug-in 2 top electric stove is kept in the cabinet.'},{imageUrl: 'https://a0.muscache.com/im/pictures/341c9205-5711-4b9a-86e3-921d2e94aa75.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/dd797008-a0b2-43b5-915b-531cb7ddd5fc.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/9f1ab23e-be88-4153-bd3f-b5b924e1a40a.jpg?im_w=1920', description: 'Wall table pulls out for sit down meals for up to 4 people.'},{imageUrl: 'https://a0.muscache.com/im/pictures/a9ee95dd-d5f0-4def-95de-e28117f7c65d.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/623d1840-1a8b-4b67-814e-38daf9be3c30.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/0ab00965-0e39-4015-b5ce-aeb8f7d196a8.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/c2e97e49-bf63-4945-9960-57ff567b8132.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 7,
  room_id: 7,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/5830f76f-b66a-4f7a-814d-8f9298411a54.jpg?im_w=960', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/47eefa4c-f7de-4b86-bb83-ddf5f3a10100.jpg?im_w=1920', description: 'Very comfortable memory foam tempur-pedic bed with ultra soft microfiber linens'},{imageUrl: 'https://a0.muscache.com/im/pictures/7b9f3b0c-3ef7-4ccc-8ffa-595668b15d4d.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/fabdaa8c-c2b8-4f0d-bcde-cfb4521c404c.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/6087a118-df63-4d94-b630-e94911dfd281.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/1b15bd41-5651-49e5-afe8-47d9fb620774.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/d89a3580-db07-480a-9526-1caa4eafdca8.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/619e12c4-65f5-4262-9f91-cbb0a19aaaaf.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/eefce662-c91e-4b33-a472-579e92ab923c.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/53ed6f8e-6904-408a-b16e-0b938d097726.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/04dc106d-26ae-428b-9f04-2e45945dc682.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/e60ea1a1-b2c0-4690-a34c-464da9e5b4b2.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/89a5a465-f203-44a1-8a4a-afc6f70a8926.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/5b789694-0573-4e6d-b4a1-93715c6285b1.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 8,
  room_id: 8,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/5259e03d-66ab-46a1-a0fd-07a7574b54ff.jpg?im_w=960', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/28960027-18ca-40ea-9e5e-c414eeb028b3.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/54bacf13-abaf-4368-875d-9dd222bca305.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/df9f0b4b-3da0-4f8c-80ad-8411b6f0b946.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/828b1478-4152-442a-a974-88805b5a806b.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/e58b4a7c-a140-4f8d-86c6-8847a4258ccd.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/a2ee757d-a95d-42a3-b43e-cfaf5c428461.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/00dc63af-8b12-45dc-996c-217bdb7e8e42.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/c2ecd6d2-cfe4-4597-87a7-d838d82aec52.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/9b3091bc-a608-4517-bd8f-84a3a1ff2797.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/4a5939bb-9a7a-44fa-ba98-dc8f31b9480e.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/19a63402-317b-44f6-8784-f12951728811.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/5dcd5730-7fdd-4ccc-835c-f9e95a9b59fc.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/4a167857-2793-422b-8079-d2125b906927.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/dbe4dd3c-01f9-44a3-bdb1-b53cf498e4a9.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/e21c9753-5aa1-4a85-becd-227a8d4bd263.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/1a707949-4ce5-4c67-8c5f-fe5c13dad68d.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 9,
  room_id: 9,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/7dc547cc-8102-45d9-97ee-e0302862af21.jpg?im_w=960', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/89a57655-2de2-4f42-aa2f-69b395b05408.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/19d46bf0-97f0-42a3-92d0-e66ab45299cc.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/86fed23f-f196-4655-a11a-1e46d4bedee0.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/87318546/d7fbb024_original.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/91f77356-4ee5-437c-8e4b-d7612471b05d.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/16edf1c4-4622-41c2-9ddb-f2fdefbd6920.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/3350e85a-457e-4998-b7b7-bb00735c3b6e.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/f6c64c3a-ea28-4e91-ae72-83ec51421821.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 10,
  room_id: 10,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/3d5d162a-02c7-45de-9845-a20727212a84.jpg?im_w=960', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/61b4aa91-2b70-4f91-945e-9e39c1aedabc.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/294b9047-bd88-4d0a-8f4e-e32c34f53933.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/29fd1e0e-1010-4684-82a8-d2221a377c6d.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/666e5810-b005-4c17-b217-1e1d1773237b.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/48f268b9-81d2-4599-8228-8e291a41c2fe.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/dd41e79f-87e9-489e-8c19-9694f4d6aa6f.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/3c47b711-e92a-4863-9710-a2facd91a87e.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/a3646cda-f3bc-4fd5-b16d-fb88d49308f7.jpg?im_w=1920', description: ''},{imageUrl: 'https://a0.muscache.com/im/pictures/0579d9fc-fa27-420e-983c-ee58ab9207ac.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 11,
  room_id: 11,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 12,
  room_id: 12,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 13,
  room_id: 13,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 14,
  room_id: 14,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 15,
  room_id: 15,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 16,
  room_id: 16,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 17,
  room_id: 17,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 18,
  room_id: 18,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 19,
  room_id: 19,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 20,
  room_id: 20,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 21,
  room_id: 21,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 22,
  room_id: 22,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 23,
  room_id: 23,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 24,
  room_id: 24,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 25,
  room_id: 25,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 26,
  room_id: 26,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 27,
  room_id: 27,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 28,
  room_id: 28,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 29,
  room_id: 29,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 30,
  room_id: 30,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 31,
  room_id: 31,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 32,
  room_id: 32,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 33,
  room_id: 33,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 34,
  room_id: 34,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 35,
  room_id: 35,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 36,
  room_id: 36,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 37,
  room_id: 37,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 38,
  room_id: 38,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 39,
  room_id: 39,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 40,
  room_id: 40,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 41,
  room_id: 41,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 42,
  room_id: 42,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 43,
  room_id: 43,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 44,
  room_id: 44,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 45,
  room_id: 45,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 46,
  room_id: 46,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 47,
  room_id: 47,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 48,
  room_id: 48,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 49,
  room_id: 49,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 50,
  room_id: 50,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 51,
  room_id: 51,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 52,
  room_id: 52,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 53,
  room_id: 53,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 54,
  room_id: 54,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 55,
  room_id: 55,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 56,
  room_id: 56,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 57,
  room_id: 57,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 58,
  room_id: 58,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 59,
  room_id: 59,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 60,
  room_id: 60,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 61,
  room_id: 61,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 62,
  room_id: 62,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 63,
  room_id: 63,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 64,
  room_id: 64,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 65,
  room_id: 65,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 66,
  room_id: 66,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 67,
  room_id: 67,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 68,
  room_id: 68,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 69,
  room_id: 69,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 70,
  room_id: 70,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 71,
  room_id: 71,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 72,
  room_id: 72,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 73,
  room_id: 73,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 74,
  room_id: 74,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 75,
  room_id: 75,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 76,
  room_id: 76,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 77,
  room_id: 77,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 78,
  room_id: 78,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 79,
  room_id: 79,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 80,
  room_id: 80,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 81,
  room_id: 81,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 82,
  room_id: 82,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 83,
  room_id: 83,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 84,
  room_id: 84,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 85,
  room_id: 85,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 86,
  room_id: 86,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 87,
  room_id: 87,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 88,
  room_id: 88,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 89,
  room_id: 89,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 90,
  room_id: 90,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 91,
  room_id: 91,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 92,
  room_id: 92,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 93,
  room_id: 93,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 94,
  room_id: 94,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/1233980/2d2440b3_original.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 95,
  room_id: 95,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 96,
  room_id: 96,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/1233980/2d2440b3_original.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 97,
  room_id: 97,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 98,
  room_id: 98,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 99,
  room_id: 99,
  room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/1233980/2d2440b3_original.jpg?im_w=1920', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 100,
  room_id: 100,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
},
{
  user_id: 101,
  room_id: 101,
  room_photos: [{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''},{imageUrl: '', description: ''}],
  save_status: {
    name: null,
    saved: false
  }
}
];

const insertSampleGalleries = function() {
  Gallery.create(sampleGallery)
    .then(() => db.disconnect());
};

insertSampleGalleries();