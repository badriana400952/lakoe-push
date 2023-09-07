import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Tr,
  Text,
  Image,
} from '@chakra-ui/react';
import { ImplementGrid } from '~/layouts/Grid';
import Location from '../assets/icon-pack/location.svg';
import Edit from '../assets/icon-pack/edit.svg';
import Trash from '../assets/icon-pack/trash.svg';
import LocationSlash from '../assets/icon-pack/location-slash.svg';
import React, { useState } from 'react';
import {
  ModalCreateLocation,
  ModalDelete,
} from '../components/configuration/location/Modals';

export default function StoreConfiguration() {
  // ini logic modal
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);

  const openModal1 = () => {
    setIsOpenModal1(true);
  };

  const closeModal1 = () => {
    setIsOpenModal1(false);
  };

  const openModal2 = () => {
    setIsOpenModal2(true);
  };

  const closeModal2 = () => {
    setIsOpenModal2(false);
  };

  return (
    <ImplementGrid>
      <Flex h={'100vh'} mt={5}>
        <Tabs bg={'white'} mt={5} w={'100%'} borderRadius={5}>
          <Text fontWeight={'semibold'} fontSize={'16px'} my={4} ms={4}>
            Fesyen Store
          </Text>
          <TabList>
            <Tab textDecoration={'none'}>Informasi</Tab>

            <Tab textDecoration={'none'}>Lokasi</Tab>

            <Tab textDecoration={'none'}>Template Pesan</Tab>
          </TabList>

          <TabPanels>
            {/* INI BAGIAN rifki */}
            <TabPanel>
              <p>information</p>
            </TabPanel>

            {/* INI BAGIAN BAGZA */}
            <TabPanel>
              <Box
                w={'100%'}
                py={'4px'}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box>
                  <Text fontWeight={'semibold'} fontSize={'16px'}>
                    Lokasi Toko
                  </Text>
                  <Text fontSize={'14px'} fontWeight={'thin'}>
                    Alamat ini akan digunakan sebagai alamat pengirimanmu
                  </Text>
                </Box>

                <Button
                  borderRadius={'20px'}
                  border={'1px solid #aeaeae'}
                  bg={'white'}
                  fontSize={'12px'}
                  size={'sm'}
                  onClick={openModal1}
                >
                  Tambah Lokasi
                </Button>
              </Box>
              <TableContainer
                border={'1px'}
                borderColor={'#eee'}
                borderRadius={'15px'}
                p={'10px'}
                mt={'10px'}
              >
                <Table variant="none" fontSize={'12px'}>
                  <Tbody>
                    <Tr>
                      <Td p={'0px'}>Nama Lokasi</Td>
                      <Td p={'0px'}>
                        Fesyen Store 2
                        <span
                          style={{
                            marginLeft: '10px',
                            backgroundColor: 'Green',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: '5px',
                          }}
                        >
                          Alamat Utama
                        </span>
                      </Td>
                      <Td p={'0px'}>
                        <Button
                          borderRadius={'full'}
                          bg={'white'}
                          border={'1px solid #aeaeae'}
                          p={'0px'}
                          me={'7px'}
                          size={'sm'}
                          onClick={openModal2}
                        >
                          <Image w={'15px'} src={Trash} />
                        </Button>
                        <Button
                          borderRadius={'full'}
                          bg={'white'}
                          border={'1px solid #aeaeae'}
                          p={'0px'}
                          size={'sm'}
                        >
                          <Image w={'15px'} src={Edit} />
                        </Button>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td p={'0px'}>Alamat</Td>
                      <Td p={'0px'}>
                        Jl.Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan
                      </Td>
                      <Td p={'0px'}></Td>
                    </Tr>
                    <Tr>
                      <Td p={'0px'}>Kota/Kecamatan</Td>
                      <Td p={'0px'}>Kota Tangerang Selatan, Kec. Ciputat</Td>
                      <Td p={'0px'}></Td>
                    </Tr>
                    <Tr>
                      <Td p={'0px'}>Kode Pos</Td>
                      <Td p={'0px'}>15413</Td>
                      <Td p={'0px'}></Td>
                    </Tr>
                    <Tr>
                      <Td p={'0px'}>Pinpoint</Td>
                      <Td p={'0px'}>
                        <Box
                          color={'#0086B4'}
                          display={'flex'}
                          flexDirection={'row'}
                        >
                          <Image src={Location} />
                          <Text>Sudah Endpoint</Text>
                        </Box>
                      </Td>
                      <Td p={'0px'}></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <TableContainer
                border={'1px'}
                borderColor={'#eee'}
                borderRadius={'15px'}
                p={'10px'}
                mt={'10px'}
              >
                <Table variant="none" fontSize={'12px'}>
                  <Tbody>
                    <Tr>
                      <Td p={'0px'}>Nama Lokasi</Td>
                      <Td p={'0px'}>Fesyen Store 2</Td>
                      <Td p={'0px'}>
                        <Button
                          borderRadius={'full'}
                          bg={'white'}
                          border={'1px solid #aeaeae'}
                          p={'0px'}
                          me={'7px'}
                          size={'sm'}
                        >
                          <Image w={'15px'} src={Trash} />
                        </Button>
                        <Button
                          borderRadius={'full'}
                          bg={'white'}
                          border={'1px solid #aeaeae'}
                          p={'0px'}
                          size={'sm'}
                        >
                          <Image w={'15px'} src={Edit} />
                        </Button>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td p={'0px'}>Alamat</Td>
                      <Td p={'0px'}>
                        Jl.Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan
                      </Td>
                      <Td p={'0px'}></Td>
                    </Tr>
                    <Tr>
                      <Td p={'0px'}>Kota/Kecamatan</Td>
                      <Td p={'0px'}>Kota Tangerang Selatan, Kec. Ciputat</Td>
                      <Td p={'0px'}></Td>
                    </Tr>
                    <Tr>
                      <Td p={'0px'}>Kode Pos</Td>
                      <Td p={'0px'}>15413</Td>
                      <Td p={'0px'}></Td>
                    </Tr>
                    <Tr>
                      <Td p={'0px'}>Pinpoint</Td>
                      <Td p={'0px'}>
                        <Box
                          color={'#aeaeae'}
                          display={'flex'}
                          flexDirection={'row'}
                        >
                          <Image src={LocationSlash} />
                          <Text>Belum Endpoint</Text>
                        </Box>
                      </Td>
                      <Td p={'0px'}></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <ModalCreateLocation
                isOpen={isOpenModal1}
                onClose={closeModal1}
              />
              <ModalDelete isOpen={isOpenModal2} onClose={closeModal2} />
            </TabPanel>

            {/* INI BAGIAN bani */}
            <TabPanel>
              <p>Template Pesan</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </ImplementGrid>
  );
}
