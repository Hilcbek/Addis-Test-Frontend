import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
  PagianationButtonContainer,
  PagianationContanier,
} from '../styles/HomeEmotionStyles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/musicStore';
import { deleteMusicStart } from '../music/musicSlice';
type musicType = {
  _id?: string;
  mname: string;
  desc: string;
  genere: string;
};
const TableComponent = ({ allMuiscs }: { allMuiscs: musicType[] }) => {
  const navigate = useNavigate();
  const handleUpdate = (data: musicType) => {
    navigate('/updateMusic', { state: data });
  };
  const dispatch: AppDispatch = useDispatch();
  const handleDelete = (id: string) => {
    const response: boolean = confirm(
      'Are you sure? This action is irreversible!'
    );
    if (response) {
      dispatch(deleteMusicStart(id));
      navigate('/');
    }
  };
  const itemsPerPage = 5;
  const [page, setPages] = useState<number>(1);
  const totalPages = Math.ceil(allMuiscs.length / itemsPerPage);
  const handlePagination = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage !== page &&
      selectedPage <= totalPages
    )
      setPages(selectedPage);
  };

  return (
    <TableContainer width={'full'}>
      <Table variant="striped">
        <TableCaption>All Muisc Lists!</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Music Name</Th>
            <Th>Description</Th>
            <Th align="center">Genere</Th>
            <Th align="center"></Th>
            <Th align="center"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {allMuiscs
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((music: musicType, index: number) => {
              return (
                <Tr key={music._id}>
                  <Td>{(page - 1) * itemsPerPage + index + 1}</Td>
                  <Td>{music.mname}</Td>
                  <Td>{music.desc}</Td>
                  <Td>{music.genere}</Td>
                  <Td>
                    <BiEdit onClick={() => handleUpdate(music)} />
                  </Td>
                  <Td>
                    <MdDelete
                      onClick={() => music._id && handleDelete(music._id)}
                    />
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
      <PagianationContanier>
        <PagianationButtonContainer onClick={() => handlePagination(page - 1)}>
          <BiChevronLeft />
        </PagianationButtonContainer>
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          return pageNumber < 3 ? (
            <div key={i}>
              <PagianationButtonContainer
                onClick={() => handlePagination(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </PagianationButtonContainer>
            </div>
          ) : (
            '...'
          );
        })}
        <PagianationButtonContainer onClick={() => handlePagination(page + 1)}>
          <BiChevronRight />
        </PagianationButtonContainer>
      </PagianationContanier>
    </TableContainer>
  );
};

export default TableComponent;
