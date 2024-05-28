import { FiTruck, FiTag, FiShoppingCart } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container } from "./styles";
import { Feature } from "../../components/Feature";
import { Header } from "../../components/Header";

export function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <Header />

      <main>
        <Feature title="Produto" icon={FiTag} to="/product" />

        {/* {[USER_ROLE.ADMIN, USER_ROLE.SALE].includes(user.role) && (
          <>
            {user.role === USER_ROLE.ADMIN && (
              <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />
            )}
            <Feature
              title="Relatório de vendas"
              icon={FiShoppingCart}
              to="/sales-report"
            />
          </>
        )} */}

        {[USER_ROLE.ADMIN].includes(user.role) && (
          <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />
        )}
        {[USER_ROLE.ADMIN, USER_ROLE.SALE].includes(user.role) && (
          <Feature
            title="Relatório de vendas"
            icon={FiShoppingCart}
            to="/sales-report"
          />
        )}
      </main>
    </Container>
  );
}
