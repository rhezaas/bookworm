package bookworm.infrastructures.database.types;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.fasterxml.jackson.databind.type.TypeFactory;
import com.fasterxml.jackson.core.JsonProcessingException;

import bookworm.utils.Common;


public class JSONList<T> extends BaseTypeHandler<List<T>> {

    private final Class<T> type;

    @Override
    public void setNonNullParameter(PreparedStatement preparedStatement, int i, List<T> o, JdbcType jdbcType) throws SQLException {
        
    }

    public JSONList(Class<T> type) {
        if (type == null) {
            throw new IllegalArgumentException("Type argument cannot be null");
        };

        this.type = type;
    }

    @Override
    public List<T> getNullableResult(ResultSet resultSet, String column) throws SQLException {
        try {
            return Common.mapper.readValue(resultSet.getString(column), TypeFactory.defaultInstance().constructCollectionLikeType(List.class, this.type));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<T> getNullableResult(ResultSet resultSet, int i) throws SQLException {
        return null;
    }

    @Override
    public List<T> getNullableResult(CallableStatement callableStatement, int i) throws SQLException {
        return null;
    }
}
