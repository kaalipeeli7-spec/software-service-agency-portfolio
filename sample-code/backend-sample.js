export const getServices = async (req, res) => {
  return res.json([
    { id: 1, title: 'Web Development', status: 'sample only' },
    { id: 2, title: 'App Development', status: 'sample only' }
  ]);
};
